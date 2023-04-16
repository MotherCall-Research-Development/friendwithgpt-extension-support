export function getTextArea(): HTMLTextAreaElement {
    return document.querySelector('textarea')
}

export function getFooter(): HTMLDivElement {
    return document.querySelector("div[class*='absolute bottom-0']")
}

export function getRootElement(): HTMLDivElement {
    return document.querySelector('div[id="__next"]')
}

export function getWebChatGPTToolbar(): HTMLElement {
    return document.querySelector("div[class*='wcg-toolbar']")
}

export function getSubmitButton(): HTMLButtonElement {
    const textarea = getTextArea()
    if (!textarea) {
        return null
    }
    return textarea.parentNode.querySelector("button")
}

export function getChatElement(): HTMLDivElement[] {
    return document.getElementsByClassName("text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible")
} 