<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let verticalAlignObj={
            'Baseline': 'baseline',
            'Top': 'top',
            'Middle': 'middle',
            'Bottom': 'bottom',
        }

</script>

<div>
    <h4 id="alignTable">Table cells container</h4>
    <p>
        The <b>vertical-align--top/middle/bottom</b> classes suitable for vertical alignmet into table sells.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <table class="height" style="--height: 6em">
                    <tr>
                        {#each Object.entries(verticalAlignObj) as [key, value]}
                            <td class="background-color--negative-10 vertical-align--{value}">{key}</td>
                        {/each}
                    </tr>
                </table>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<table>
    <tr>
        <td class="vertical-align--baseline">Baseline</td>
        <td class="vertical-align--top">Top</td>
        <td class="vertical-align--middle">Middle</td>
        <td class="vertical-align--bottom">Bottom</td>
    </tr>
</table>
`
                }
            </Precode>
        </div>
    </div>
</div>