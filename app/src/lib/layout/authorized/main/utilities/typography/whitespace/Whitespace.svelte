<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let containerClasses: string = 'overflow--hidden flex-wrap--wrap'    
    let containerWidth: number = 50

    let whiteSpaceArr: string[] = ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line', 'break-spaces']
    let whiteSpace: string = whiteSpaceArr[0]
</script>

<section>
    <h3 id="whiteSpace">White space</h3>
    <p>
        The <b>ws-...</b> classes of the <b>white-space</b> CSS property sets how provide horizontal or vertical space between other characters inside an element is handled.
    </p>
    <div class="display--grid gap--sm margin-bottom--md padding--sm background-color--positive border-radius--md">
        <div class="display--grid gap--xs">
            <div class="display--flex flex-wrap--wrap gap--xs">
                {#each whiteSpaceArr as value}
                    <Button
                        class="btn-secondary {whiteSpace === value ? 'active' : ''}"
                        on:click={() => whiteSpace = value}
                        disabled={whiteSpace === value}
                    >ws-{value}</Button>
                {/each}
            </div>
            <div class="display--grid">
                <label for="containerWidth">Container width {containerWidth}%:</label>
                <input type="range" name="containerWidth" min={0} max={100} step={1} bind:value={containerWidth}>
            </div>            
        </div>
        <p class="ws-{whiteSpace} {containerClasses}" style="width: {containerWidth}%;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode>
                {
`<p class="ws-${whiteSpace}">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>