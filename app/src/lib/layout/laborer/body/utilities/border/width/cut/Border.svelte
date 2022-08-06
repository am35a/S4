<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h3 id="CutBorderWith">Cut border</h3>
    <p>
        ...
    </p>
    <div class="alert alert-warning js-start">
        Pay attention the <b>border-...-0</b> classes remove the border by remove border width that resizing the container! If you need to keep the size of the container as before use <b>bg-transparent</b>.
    </div>
    <div class="d-grid g-2 p-2 bg-positive br">
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 b bs-none">bs-none</div>
        </div>
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 b bxs-none">bxs-none</div>
            <div class="bg-negative-10 p-4 b bys-none">bys-none</div>
        </div>
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 b bls-none">bls-none</div>
            <div class="bg-negative-10 p-4 b bts-none">bts-none</div>
            <div class="bg-negative-10 p-4 b brs-none">brs-none</div>
            <div class="bg-negative-10 p-4 b bbs-none">bbs-none</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="btr-0">
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