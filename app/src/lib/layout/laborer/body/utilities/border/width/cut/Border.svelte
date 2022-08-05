<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h3 id="CutBorderWith">Cut border</h3>
    <p>
        ...
    </p>
    <div class="alert alert-warning justify-self-start">
        Pay attention the <b>border-...-0</b> classes remove the border by remove border width that resizing the container! If you need to keep the size of the container as before use <b>bg-transparent</b>.
    </div>
    <div class="d-grid g-2 p-2 bg-positive rounded">
        <div class="d-flex flex-wrap g-4">
            <div class="bg-negative-10 p-4 border border-0">border-0</div>
            <div class="bg-negative-10 p-4 border border-top-0">border-top-0</div>
            <div class="bg-negative-10 p-4 border border-right-0">border-right-0</div>
            <div class="bg-negative-10 p-4 border border-bottom-0">border-bottom-0</div>
            <div class="bg-negative-10 p-4 border border-left-0">border-left-0</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
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