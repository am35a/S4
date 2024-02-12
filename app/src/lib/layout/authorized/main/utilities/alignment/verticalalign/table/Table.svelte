<script lang="ts">
    import Precode from 'component/Precode.svelte'
</script>

<div>
    <h4 id="alignTable">Table cells container</h4>
    <div class="d-grid g-5">
        <div>
            The <b>va-top</b>, <b>va-middle</b> and <b>va-bottom</b> classes suitable for vertical alignmet into table sells.
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 bgc-positive br">
                <table style="height: 6em;">
                    <tr>
                        <td class="bgc-negative-10 va-baseline">Baseline</td>
                        <td class="bgc-negative-10 va-top">Top</td>
                        <td class="bgc-negative-10 va-middle">Middle</td>
                        <td class="bgc-negative-10 va-bottom">Bottom</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="d-grid g-3">
            <b>HTML</b>
            <Precode>
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
        </div>
    </div>
</div>