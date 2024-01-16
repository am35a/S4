<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div>
    <h3 id="cut">Cut border</h3>
    <p>
        The <b>border-...0</b> classes remove borders from one of the four sides or all at once.
    </p>
    <div class="alert alert-warning js-start">
        Pay attention the <b>border-...-0</b> classes remove the border by remove border width that resizing the container! If you need to keep the size of the container as before use <b>bgc-span-transparent</b>.
    </div>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex fw-wrap g-4">
            <div class="bgc-negative-10 p-4 border border-0">border-0</div>
            <div class="bgc-negative-10 p-4 border border-top-0">border-top-0</div>
            <div class="bgc-negative-10 p-4 border border-right-0">border-right-0</div>
            <div class="bgc-negative-10 p-4 border border-bottom-0">border-bottom-0</div>
            <div class="bgc-negative-10 p-4 border border-left-0">border-left-0</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div class="border-0"></div>
<div class="border border-top-0"></div>
<div class="border border-right-0"></div>
<div class="border border-bottom-0"></div>
<div class="border border-left-0"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>