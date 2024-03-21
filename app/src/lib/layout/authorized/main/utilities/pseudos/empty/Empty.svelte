<script>
    import Precode from 'component/Precode.svelte'

    let defaultEmptyContent = true
    let defaultEmptyClass = false
</script>

<section>
    <h3>:empty</h3>
    <p>
        The both <b>display--none</b> class and <b>:empty</b> pseudo-class hide any empty container. The parentheses
        of container must be closed "{'><'}"
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Actions</b>
            <div class="display--inline-flex flex-wrap--wrap g-3">
                <button
                    class="btn"
                    class:active={defaultEmptyClass}
                    on:click={() => defaultEmptyClass = !defaultEmptyClass }
                >
                    {defaultEmptyClass ? 'remove' : 'add'} class
                </button>
                <button
                    class="btn"
                    class:active={defaultEmptyContent}
                    on:click={() => defaultEmptyContent = !defaultEmptyContent }
                >
                    {defaultEmptyContent ? 'remove' : 'add'} content
                </button>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--grid g-2 grid-template-columns--2">
                    <div
                        class:display--none:empty={defaultEmptyClass}
                        class="background-color--negative-10 p-4 border-radius--md"
                    >{defaultEmptyContent ? 'content' : ''}</div>
                    <div
                        class:display--none:empty={defaultEmptyClass}
                        class="background-color--negative-10 p-4 border-radius--md"
                    ></div>
                </div>
            </div>
            <div class="display--grid g-4">
                <b>HTML</b>
                <Precode>
                    {
`<div class="${defaultEmptyClass ? 'display--none:empty' : ''}">${defaultEmptyContent ? 'content' : ''}</div>
<div class="${defaultEmptyClass ? 'display--none:empty' : ''}"></div>
`
                    }
                </Precode>
            </div>
        </div>
    </div>
</section>