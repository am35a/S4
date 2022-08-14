<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div class="d-grid g-2">
    <h4 id="CutBorderRadius">Cut radius</h4>
    <p>
        To remove round of corners use <b>rounded-0</b> class and for accurate manipulations use <b>rounded-...-0</b>.
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex f-wrap g-2">
            <div class="bgc-negative-10 p-4 rounded-lg rounded-left-0">rounded-left-0</div>
            <div class="bgc-negative-10 p-4 rounded-lg rounded-top-0">rounded-top-0</div>
            <div class="bgc-negative-10 p-4 rounded-lg rounded-right-0">rounded-right-0</div>
            <div class="bgc-negative-10 p-4 rounded-lg rounded-bottom-0">rounded-bottom-0</div>
        </div>
        <div class="d-flex f-wrap g-2">
            <div class="bgc-negative-10 p-4 rounded-lg rounded-top-left-0">rounded-top-left-0</div>
            <div class="bgc-negative-10 p-4 rounded-lg rounded-top-right-0">rounded-top-right-0</div>
            <div class="bgc-negative-10 p-4 rounded-lg rounded-bottom-right-0">rounded-bottom-right-0</div>
            <div class="bgc-negative-10 p-4 rounded-lg rounded-bottom-left-0">rounded-bottom-left-0</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="rounded-lg rounded-left-0">rounded-left-0</div>
<div class="rounded-lg rounded-top-0">rounded-top-0</div>
<div class="rounded-lg rounded-right-0">rounded-right-0</div>
<div class="rounded-lg rounded-bottom-0">rounded-bottom-0</div>

<div class="rounded-lg rounded-top-left-0">rounded-top-left-0</div>
<div class="rounded-lg rounded-top-right-0">rounded-top-right-0</div>
<div class="rounded-lg rounded-bottom-right-0">rounded-bottom-right-0</div>
<div class="rounded-lg rounded-bottom-left-0">rounded-bottom-left-0</div>

`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>