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
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            <Button
                class="btn-secondary {defaultEmptyClass ? 'active' : ''}"
                on:click = {() => defaultEmptyClass = !defaultEmptyClass }
            >
                {defaultEmptyClass ? 'remove' : 'add'} class
            </Button>
            <Button
                class="btn-secondary {defaultEmptyContent ? 'active' : ''}"
                on:click = {() => defaultEmptyContent = !defaultEmptyContent }
            >
                {defaultEmptyContent ? 'remove' : 'add'} content
            </Button>
        </div>
        <div class="d-grid g-2 cols-2">
            <div class="bgc-negative-10 p-4 rounded {defaultEmptyClass ? 'empty-none' : ''}">{defaultEmptyContent ? 'content' : ''}</div>
            <div class="bgc-negative-10 p-4 rounded {defaultEmptyClass ? 'empty-none' : ''}"></div>
        </div>
</section>