<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h3 id="AddBorderWith">Add border</h3>
    <div class="d-grid g-2 p-2 bg-positive br">
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 b">b</div>
        </div>
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 bx">bx</div>
            <div class="bg-negative-10 p-4 by">by</div>
        </div>
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 bl">bl</div>
            <div class="bg-negative-10 p-4 bt">bt</div>
            <div class="bg-negative-10 p-4 br">br</div>
            <div class="bg-negative-10 p-4 bb">bb</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="btr-0">
                {
`<div class="border"></div>
<div class="border-top"></div>
<div class="border-right"></div>
<div class="border-bottom"></div>
<div class="border-left"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>