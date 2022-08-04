<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h3 id="AddBorderRadius">Add radius</h3>
    <p>
        rounded
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded">        
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 rounded-xxs">rounded-xxs</div>
            <div class="bg-negative-10 p-4 rounded-xs">rounded-xs</div>
            <div class="bg-negative-10 p-4 rounded-sm">rounded-sm</div>
            <div class="bg-negative-10 p-4 rounded-md">rounded-md</div>
            <div class="bg-negative-10 p-4 rounded-lg">rounded-lg</div>
            <div class="bg-negative-10 p-4 rounded-xl">rounded-xl</div>
            <div class="bg-negative-10 p-4 rounded-xxl">rounded-xxl</div>
        </div>
        <div class="d-flex flex-wrap g-2">
            <div>
                <div class="bg-negative-10 p-7 rounded-circle"></div>
            </div>
            <div>
                <div class="bg-negative-10 p-4 rounded-pill">rounded-pill</div>
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
`
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>