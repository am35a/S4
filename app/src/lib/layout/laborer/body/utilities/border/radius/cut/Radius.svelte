<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h4 id="CutBorderRadius">Cut radius</h4>
    <p>
        To remove round of corners use <b>br-0</b> class and for accurate manipulations use <b>br-...-0</b>.
    </p>
    <div class="d-grid g-2 p-2 bg-positive br">
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 br-l blr-0">blr-0</div>
            <div class="bg-negative-10 p-4 br-l btr-0">btr-0</div>
            <div class="bg-negative-10 p-4 br-l brr-0">brr-0</div>
            <div class="bg-negative-10 p-4 br-l bbr-0">bbr-0</div>
        </div>
        <div class="d-flex flex-wrap g-2">
            <div class="bg-negative-10 p-4 br-l btlr-0">btlr-0</div>
            <div class="bg-negative-10 p-4 br-l btrr-0">btrr-0</div>
            <div class="bg-negative-10 p-4 br-l bbrr-0">bbrr-0</div>
            <div class="bg-negative-10 p-4 br-l bblr-0">bblr-0</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="btr-0">
                {
`<div class="br-l blr-0">blr-0</div>
<div class="br-l btr-0">btr-0</div>
<div class="br-l brr-0">brr-0</div>
<div class="br-l bbr-0">bbr-0</div>

<div class="br-l btlr-0">btlr-0</div>
<div class="br-l btrr-0">btrr-0</div>
<div class="br-l bbrr-0">bbrr-0</div>
<div class="br-l bblr-0">bblr-0</div>

`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>