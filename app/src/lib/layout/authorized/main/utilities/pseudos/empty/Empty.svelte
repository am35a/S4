<script lang="ts">
    import Button from 'component/Button.svelte'

    let defaultEmptyContent: boolean = true
    let defaultEmptyClass: boolean = false

</script>

<section>
    <h3>:empty</h3>
    <p>
        ...
    </p>
    <div class="display--grid g-2 p-2 background-color--positive border-radius--md">
        <div class="display--flex g-2">
            <Button
                class="btn-secondary {defaultEmptyClass ? 'active' : ''}"
                on:click={() => defaultEmptyClass = !defaultEmptyClass }
            >
                {defaultEmptyClass ? 'remove' : 'add'} class
            </Button>
            <Button
                class="btn-secondary {defaultEmptyContent ? 'active' : ''}"
                on:click={() => defaultEmptyContent = !defaultEmptyContent }
            >
                {defaultEmptyContent ? 'remove' : 'add'} content
            </Button>
        </div>
        <div class="display--grid g-2 gtc-2">
            <div class="background-color--negative-10 p-4 border-radius--md {defaultEmptyClass ? 'empty-none' : ''}">{defaultEmptyContent ? 'content' : ''}</div>
            <div class="background-color--negative-10 p-4 border-radius--md {defaultEmptyClass ? 'empty-none' : ''}"></div>
        </div>
</section>