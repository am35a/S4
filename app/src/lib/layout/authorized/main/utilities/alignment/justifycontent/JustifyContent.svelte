<script>
    import Precode from 'component/Precode.svelte'

    let containerTypeObj = {
        'grid': 'd-grid',
        'flex': 'd-flex'
    }
    let containerType = containerTypeObj['flex']

    let justifyContentArr = [ 'center', 'end', 'start', 'stretch', 'between', 'around', 'evenly' ]
</script>

<section>
    <h3 id="justifyContent">Justify content</h3>
    <p>
        The <b>jc-{Object.values(justifyContentArr).join('/')}</b> classes defines how distributes space between and around content items along the main-axis of a <b>flex</b> container, and the inline axis of a <b>grid</b> container.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Display</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each Object.entries(containerTypeObj) as [key, value]}
                    <button
                        class="btn"
                        class:active = {containerType === value}
                        on:click = {() => containerType = value}
                        disabled={containerType === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br">
                {#each justifyContentArr as item }
                    <div class="{containerType} g-2 bgc-negative-10 p-2 jc-{item}">
                        <div class="bgc-negative-10 px-2 py-1">one</div>
                        <div class="bgc-negative-10 px-2 py-1">two</div>
                        <div class="bgc-negative-10 px-2 py-1">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each justifyContentArr as item }
                    {
`<div class="${containerType} jc-${item}">
    // ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>