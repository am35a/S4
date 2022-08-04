<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h3 id="CutBorderRadius">Cut radius</h3>
    <p>
        rounded-0
    </p>
    <div class="d-grid g-2 p-2 bg-positive rounded">
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 rounded-lg rounded-left-0">rounded-left-0</div>
            <div class="bg-negative-10 p-4 rounded-lg rounded-top-0">rounded-top-0</div>
            <div class="bg-negative-10 p-4 rounded-lg rounded-right-0">rounded-right-0</div>
            <div class="bg-negative-10 p-4 rounded-lg rounded-bottom-0">rounded-bottom-0</div>
        </div>
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 rounded-lg rounded-top-left-0">rounded-top-left-0</div>
            <div class="bg-negative-10 p-4 rounded-lg rounded-top-right-0">rounded-top-right-0</div>
            <div class="bg-negative-10 p-4 rounded-lg rounded-bottom-right-0">rounded-bottom-right-0</div>
            <div class="bg-negative-10 p-4 rounded-lg rounded-bottom-left-0">rounded-bottom-left-0</div>
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