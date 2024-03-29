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
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Actions</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
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
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--grid gap--xs grid-template-columns--2">
                    <div
                        class:display--none:empty={defaultEmptyClass}
                        class="background-color--negative-10 padding--md border-radius--md"
                    >{defaultEmptyContent ? 'content' : ''}</div>
                    <div
                        class:display--none:empty={defaultEmptyClass}
                        class="background-color--negative-10 padding--md border-radius--md"
                    ></div>
                </div>
            </div>
            <div class="display--grid gap--md">
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