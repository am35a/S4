<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let lineHeightArr: string[] = ['0', '1', 'normal', 'unset']
    let lineHeight: string = lineHeightArr[2]
</script>

<section>
    <h3 id="lineHight">Line height</h3>
    <p>
        To change the <b>line-height</b> property, use the <b>lh-0/1/unset/normal</b> classes.
        For necessary, able set a custom size variable <b>--lh</b> in the styles for the <b>lh</b> class.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br-md">
        <div class="d-flex  fw-wrap g-2">
            {#each lineHeightArr as value}
                <Button
                    class="btn-secondary {lineHeight === value ? 'active' : ''}"
                    on:click = {() => lineHeight = value}
                    disabled = {lineHeight === value}
                >lh-{value}</Button>
            {/each}
        </div>
        <div class="lh-{lineHeight}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus doloribus porro eos quidem commodi vel accusantium odit ducimus tempore! Facilis, repellat commodi. Unde, sapiente eum necessitatibus eveniet fugit corrupti cum.</div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div class="lh-${lineHeight}">Lorem ipsum, dolor sit amet consectetur adipi...</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>