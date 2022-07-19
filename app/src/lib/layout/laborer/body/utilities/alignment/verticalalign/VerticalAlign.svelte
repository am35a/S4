<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Button from "component/Button.svelte"
    import Details from "component/Details.svelte"

    let verticalAlign:string = ''
    let verticalAlignArr = {
        auto: '',
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4'
    }
</script>

<section class="d-grid g-2">
    <h3>Vertical alignment</h3>
    <div class="d-grid g-2">
        <h4>Inline container</h4>
        <p>The <b>vertical-align-...</b> properties sets vertical alignment of an <b>inline</b>, <b>inline-block</b> elements.</p>
        <div class="d-grid g-2 p-2 bg-positive rounded-md">
            <div class="d-inline-flex flex-wrap g-2">
                {#each Object.entries(verticalAlignArr) as [key, value]}
                    <Button
                        class="btn-secondary {verticalAlign === value ? 'active' : ''}"
                        on:click = {() => verticalAlign = value}
                        disabled={verticalAlign === value}
                    >{key}</Button>
                {/each}
            </div>
            <div class="d-grid g-2" style="--lh: {verticalAlign}">
                <div class="lh col-span-full row-span-full my-auto border-bottom border-top border-secondary">&nbsp;<!-- base line indicator--></div>
                <div class="lh col-span-full row-span-full my-auto border-bottom"><!-- base line indicator--></div>
                <div class="lh col-span-full row-span-full py-4">
                    <span class="bg-primary px-1 rounded align-baseline">Baseline</span>
                    <span class="bg-primary px-1 rounded align-sub">Sub</span>
                    <span class="bg-primary px-1 rounded align-super">Super</span>
                    <span class="bg-primary px-1 rounded align-top">Top</span>
                    <span class="bg-primary px-1 rounded align-middle">Middle</span>
                    <span class="bg-primary px-1 rounded align-bottom">Bottom</span>
                    <span class="bg-primary px-1 rounded align-text-bottom">Text bottom</span>
                    <span class="bg-primary px-1 rounded align-text-top">Text top</span>
                </div>
            </div>
        </div>
        <Details>
            <svelte:fragment slot="title">
                Code example
            </svelte:fragment>
            <svelte:fragment slot="body">
                <Precode class="rounded-top-0">
                    {
`<span class="align-baseline">Baseline</span>
<span class="align-sub">Sub</span>
<span class="align-super">Super</span>
<span class="align-top">Top</span>
<span class="align-middle">Middle</span>
<span class="align-bottom">Bottom</span>
<span class="align-text-bottom">Text bottom</span>
<span class="align-text-top">Text top</span>`
                    }
                </Precode>
            </svelte:fragment>
        </Details>
    </div>
    <div class="d-grid g-2">
        <h4>Table cells container</h4>
        <p>Use values <b>top</b>, <b>middle</b> and <b>bottom</b> for vertical alignmet into table sells.</p>
        <div class="d-grid g-2 p-2 bg-positive rounded-md">
            <table style="height: 64rem;">
                <tr>
                    <td class="border align-baseline">Baseline</td>
                    <td class="border align-top">Top</td>
                    <td class="border align-middle">Middle</td>
                    <td class="border align-bottom">Bottom</td>
                </tr>
            </table>
        </div>
        <Details>
            <svelte:fragment slot="title">
                Code example
            </svelte:fragment>
            <svelte:fragment slot="body">
                <Precode class="rounded-top-0">
                    {
`<table>
<tr>
    <td class="border align-baseline">Baseline</td>
    <td class="border align-top">Top</td>
    <td class="border align-middle">Middle</td>
    <td class="border align-bottom">Bottom</td>
</tr>
</table>`
                    }
                </Precode>
            </svelte:fragment>
        </Details>
    </div>
</section>