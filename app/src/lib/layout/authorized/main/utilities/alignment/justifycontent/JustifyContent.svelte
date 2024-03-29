<script>
    import Precode from 'component/Precode.svelte'

    let containerTypeObj={
        'grid': 'display--grid',
        'flex': 'display--flex'
    }
    let containerType = containerTypeObj['flex']

    let justifyContentArr = [ 'center', 'end', 'start', 'stretch', 'between', 'around', 'evenly' ]
</script>

<section>
    <h3 id="justifyContent">Justify content</h3>
    <p>
        The <b>justify-content--{Object.values(justifyContentArr).join('/')}</b> classes defines how distributes space between and around content items along the main-axis of a <b>flex</b> container, and the inline axis of a <b>grid</b> container.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each Object.entries(containerTypeObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={containerType === value}
                        on:click={() => containerType = value}
                        disabled={containerType === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                {#each justifyContentArr as item}
                    <div class="{containerType} gap--xs background-color--negative-10 padding--xs justify-content--{item}">
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {#each justifyContentArr as item}
                    {
`<div class="${containerType} justify-content--${item}">
    ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>