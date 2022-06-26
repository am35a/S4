<script lang="ts">
    import Precode from "src/components/Precode.svelte"
    import Button from "src/components/Button.svelte"

    let alignValue:string = ''
    let alignValueArr = {
        auto: '',
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4'
    }

</script>

<section>
    <div class="h2" aria-level={2} role="heading">Alignment</div>
    <div class="d-grid">
        <div class="h3" aria-level={3} role="heading">Vertical alignment</div>
        <p>Use values "top", "middle" and "bottom" for vertical alignmet into table sells.</p>
        <div class="d-grid g-2 p-2 bg-positive rounded-md">
            <div class="d-inline-flex flex-wrap g-2">
                {#each Object.entries(alignValueArr) as [key, value]}
                    <Button
                        class="btn-secondary {alignValue === value ? 'active' : ''}"
                        on:click = {() => alignValue = value}
                        disabled={alignValue === value}
                    >{key}</Button>
                {/each}
            </div>
            <div class="d-grid g-2" style="--lh: {alignValue};">
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
            <table style="height: 64rem;">
                <tr>
                    <td class="align-baseline">Baseline</td>
                    <td class="align-top">Top</td>
                    <td class="align-middle">Middle</td>
                    <td class="align-bottom">Bottom</td>
                </tr>
            </table>
            <Precode>
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
        </div>
    </div>
</section>