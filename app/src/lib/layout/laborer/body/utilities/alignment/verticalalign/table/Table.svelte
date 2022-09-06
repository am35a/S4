<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div>
    <h4 id="alignTable">Table cells container</h4>
    <p>
        Use values <b>top</b>, <b>middle</b> and <b>bottom</b> for vertical alignmet into table sells.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <table style="height: 64rem;">
            <tr>
                <td class="bgc-negative-10 va-baseline">Baseline</td>
                <td class="bgc-negative-10 va-top">Top</td>
                <td class="bgc-negative-10 va-middle">Middle</td>
                <td class="bgc-negative-10 va-bottom">Bottom</td>
            </tr>
        </table>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<table>
    <tr>
        <td class="va-baseline">Baseline</td>
        <td class="va-top">Top</td>
        <td class="va-middle">Middle</td>
        <td class="va-bottom">Bottom</td>
    </tr>
</table>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>