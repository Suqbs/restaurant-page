

export function LoadInitialPage(LoaderFunction, content, InitialTab) {
    InitialTab.classList.add("active");
    LoaderFunction(content);
}
