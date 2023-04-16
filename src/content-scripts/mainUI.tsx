import "../style/base.css";
import { h, render } from "preact";
import {
  getTextArea,
  getFooter,
  getRootElement,
  getSubmitButton,
  getWebChatGPTToolbar,
  getChatElement,
} from "../util/elementFinder";
import toast, { Toaster } from "react-hot-toast";
import Toolbar from "src/components/toolbar";
import ErrorMessage from "src/components/errorMessage";
import { getUserConfig, UserConfig } from "src/util/userConfig";
import { SearchRequest, SearchResult, webSearch } from "./ddg_search";

import createShadowRoot from "src/util/createShadowRoot";
import {
  compilePrompt,
  promptContainsWebResults,
} from "src/util/promptManager";
import SlashCommandsMenu, {
  slashCommands,
} from "src/components/slashCommandsMenu";
import { apiExtractText } from "./api";
import Share from "src/components/Share";
import axios from "axios";
import SuccessMessage from "src/components/successMessage";
import Toastss from "src/components/toast";

let isProcessing = false;

let btnSubmit: HTMLButtonElement;
let chats: HTMLDivElement[];
let textarea: HTMLTextAreaElement;
let footer: HTMLDivElement;

function renderSlashCommandsMenu() {
  let div = document.querySelector("wcg-slash-commands-menu");
  if (div) div.remove();

  div = document.createElement("wcg-slash-commands-menu");
  const textareaParentParent = textarea.parentElement?.parentElement;

  textareaParentParent?.insertBefore(div, textareaParentParent.firstChild);
  render(<SlashCommandsMenu textarea={textarea} />, div);
}

async function processQuery(query: string, userConfig: UserConfig) {
  const containsWebResults = await promptContainsWebResults();
  if (!containsWebResults) {
    return undefined;
  }

  let results: SearchResult[];

  const pageCommandMatch = query.match(/page:(\S+)/);
  if (pageCommandMatch) {
    const url = pageCommandMatch[1];
    results = await apiExtractText(url);
  } else {
    const searchRequest: SearchRequest = {
      query,
      timerange: userConfig.timePeriod,
      region: userConfig.region,
    };

    results = await webSearch(searchRequest, userConfig.numWebResults);
  }

  return results;
}

async function handleSubmit(query: string) {
  const userConfig = await getUserConfig();

  if (!userConfig.webAccess) {
    textarea.value = query;
    pressEnter();
    return;
  }

  try {
    const results = await processQuery(query, userConfig);
    // console.info("WebChatGPT results --> ", results)
    const compiledPrompt = await compilePrompt(results, query);
    // console.info("WebChatGPT compiledPrompt --> ", compiledPrompt)
    textarea.value = compiledPrompt;
    pressEnter();
  } catch (error) {
    if (error instanceof Error) {
      showErrorMessage(error);
    }
  }
}

async function onSubmit(event: MouseEvent | KeyboardEvent) {
  const isKeyEvent = event instanceof KeyboardEvent;

  if (isKeyEvent && event.shiftKey && event.key === "Enter") return;

  if (isKeyEvent && event.key === "Enter" && event.isComposing) return;

  if (
    !isProcessing &&
    (event.type === "click" || (isKeyEvent && event.key === "Enter"))
  ) {
    const query = textarea.value.trim();

    if (query === "") return;

    textarea.value = "";

    const isPartialCommand = slashCommands.some(
      (command) =>
        command.name.startsWith(query) && query.length <= command.name.length
    );
    if (isPartialCommand) return;

    isProcessing = true;
    await handleSubmit(query);
    isProcessing = false;
  }
}

function pressEnter() {
  textarea.focus();
  const enterEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: "Enter",
    code: "Enter",
  });
  textarea.dispatchEvent(enterEvent);
}

function showErrorMessage(error: Error) {
  console.info("WebChatGPT error --> API error: ", error);
  const div = document.createElement("div");
  document.body.appendChild(div);
  render(<ErrorMessage message={error.message} />, div);
}
function showSuccessMessage(error: string) {
  console.info("WebChatGPT error --> API error: ", error);
  const div = document.createElement("div");
  document.body.appendChild(div);
  render(<Toastss />, div);
}
async function onShared(Q: string, A: string) {
  const formData = new FormData();
  formData.append(
    "article",
    JSON.stringify({
      title: `[Question] ${Q.replaceAll("1 / 1", "")}`,
      description: `[Chat GPT] ${A.replaceAll("1 / 1", "")}`,
      body: "",
      tagLists: ["rades"],
    })
  );
  await toast.promise(
    axios
      .post("https://api.rades.asia/api/articles", formData, {
        headers: {
          Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjlhYWJmZjU4ODlhNjY5YzkyN2Y2OSIsInVzZXJuYW1lIjoiMHgyNjAxNDU4NWYxYTRkNTY1MmNmZTNjNmM1NDQyYjI3NTZmN2FhNmZiIiwicHVibGljS2V5IjoiMHgyNjAxNDU4NWYxYTRkNTY1MmNmZTNjNmM1NDQyYjI3NTZmN2FhNmZiIiwiZXhwIjoxNjg2NjU3OTg1LjAxOCwiaWF0IjoxNjgxNDczOTg1fQ.t_IiGAhNMUtLnwVHbXJG-92c0S6-1UDGaoYl9FWC68A`,
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          headers: { "Access-Control-Allow-Origin": "*" },
          Expires: "0",
          "content-type": "text/json",
        },
      })
      .then((res: any) => {
        toast.success(
          <a
            href={`https://d802tlbgfq42j.cloudfront.net/dashboards/0x26014585f1a4d5652cfe3c6c5442b2756f7aa6fb/article/${res?.data?.article?.slug}/medias/0`}
          >
            Successfully shared!{" "}
            <p style={{ textecoration: "underline overline", fontWeight: 600 }}>
              Click here to see your message
            </p>
          </a>
        );
      }),
    {
      success: ``,
      loading: "Sharing...",
      error: "Something when wrong",
    }
  );
}
async function updateUI() {
  if (getWebChatGPTToolbar()) return;
  const div = document.createElement("div");
  document.body.appendChild(div);
  render(<Toastss />, div);
  btnSubmit = getSubmitButton();
  const { shadowRootDiv, shadowRoot } = await createShadowRoot(
    "content-scripts/mainUI.css"
  );
  shadowRootDiv.classList.add("wcg-toolbar");
  textarea = getTextArea();
  footer = getFooter();
  if (textarea && btnSubmit) {
    chats = getChatElement();

    // set some properties of the button element
    const QuestionsELements = document.getElementsByClassName(
      "group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 dark:bg-gray-800"
    );
    const AnswerELements = document.getElementsByClassName(
      "group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]"
    );
    for (let i = 0; i < AnswerELements.length; i++) {
      const button = document.createElement("button");
      button.innerHTML = "Share";
      button.className =
        "p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
      AnswerELements[i]
        .getElementsByClassName(
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible"
        )[0]
        .appendChild(button);
      // get Q content
      const Qcontext = QuestionsELements[i]?.textContent;
      const Acontext = AnswerELements[i]?.textContent;
      button.addEventListener("click", async () => {
        await onShared(Qcontext || "", Acontext || "");
      });
    }

    // chats.map((chat) => {
    //   chat.innerHTML += "<button onclick=()>Share</button>";
    // });
    textarea.addEventListener("keydown", onSubmit);
    btnSubmit.addEventListener("click", onSubmit);

    const textareaParentParent = textarea.parentElement?.parentElement;
    if (textareaParentParent && textareaParentParent.parentElement) {
      textareaParentParent.style.flexDirection = "column";
      textareaParentParent.parentElement.style.flexDirection = "column";
      textareaParentParent.parentElement.style.gap = "0px";
      textareaParentParent.parentElement.style.marginBottom = "0.5em";
    }

    try {
      const { shadowRootDiv, shadowRoot } = await createShadowRoot(
        "content-scripts/mainUI.css"
      );
      shadowRootDiv.classList.add("wcg-toolbar");
      textareaParentParent?.appendChild(shadowRootDiv);
      render(<Toolbar textarea={textarea} />, shadowRoot);
    } catch (e) {
      if (e instanceof Error) {
        showErrorMessage(
          Error(
            `Error loading WebChatGPT toolbar: ${e.message}. Please reload the page (F5).`
          )
        );
        console.error(e);
      }
    }
    // textarea.parentElement.style.flexDirection = 'row'

    renderSlashCommandsMenu();
  }

  if (footer) {
    const lastChild = footer.lastElementChild as HTMLElement;
    if (lastChild) lastChild.style.padding = "0 0 0.5em 0";
  }
}

const rootEl = getRootElement();
window.onload = function () {
  updateUI();

  try {
    new MutationObserver(() => {
      updateUI();
    }).observe(rootEl, { childList: true });
  } catch (e) {
    if (e instanceof Error) {
      showErrorMessage(e);
    }
  }
};
