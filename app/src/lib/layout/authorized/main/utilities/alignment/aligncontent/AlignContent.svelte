<script>
    import Precode from 'component/Precode.svelte'
    
    let containerTypesObj={
        grid: 'display--grid grid-template-columns--2',
        flex: 'display--flex flex-wrap--wrap'
    },
        containerType = containerTypesObj.grid

    let alignContentArr = ['start', 'end', 'stretch', 'around', 'between', 'evenly'],
        alignContent = alignContentArr[0]

</script>

<section>
    <h3 id="alignContent">Align content</h3>
    <p>
        The <b>align-content--{alignContentArr.join('/')}</b> classes sets the distribution of space between
        and around content item of <b>grid</b> and <b>flex</b> containers.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each Object.entries(containerTypesObj) as [key, value]}
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
            <b>Align</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each alignContentArr as value}
                    <button
                        class="btn"
                        class:active={alignContent === value}
                        on:click={() => alignContent = value}
                        disabled={alignContent === value}
                    >align-content--{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="{containerType} gap--sm padding--sm align-content--{alignContent} background-color--positive border-radius--md height" style="--height: 16em; --p_height: 24em;">
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                {#if containerType.includes('display--flex')}
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">four</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">five</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">six</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">seven</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">eight</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">nine</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">ten</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">eleven</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">twelve</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">thirteen</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">fourteen</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">fifteen</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">sixteen</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">seventeen</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">eighteen</div>
                    <div class="background-color--negative-10 padding-x--xs padding-y--xxs">nineteen</div>
                {/if}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="${containerType} align-content--${alignContent}">
    ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>