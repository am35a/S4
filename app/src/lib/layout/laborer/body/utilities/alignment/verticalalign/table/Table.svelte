<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h4>Table cells container</h4>
    <p>
        Use values <b>top</b>, <b>middle</b> and <b>bottom</b> for vertical alignmet into table sells.
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded">
        <table style="height: 64rem;">
            <tr>
                <td class="bg-negative-10 va-baseline">Baseline</td>
                <td class="bg-negative-10 va-top">Top</td>
                <td class="bg-negative-10 va-middle">Middle</td>
                <td class="bg-negative-10 va-bottom">Bottom</td>
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
        <td class="border va-baseline">Baseline</td>
        <td class="border va-top">Top</td>
        <td class="border va-middle">Middle</td>
        <td class="border va-bottom">Bottom</td>
    </tr>
</table>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>