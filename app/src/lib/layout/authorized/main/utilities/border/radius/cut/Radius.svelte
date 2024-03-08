<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div>
    <h4 id="cut">Cut radius</h4>
    <p>
        To remove round of corners use <b>br-0</b> class and for accurate manipulations use <b>br-...-0</b>.
    </p>
    <div class="d-grid g-3 mb-4 p-3 background-color--positive br-md">
        <div class="d-flex fw-wrap g-4">
            <div class="background-color--negative-10 p-4 br-lg br-left-0">br-left-0</div>
            <div class="background-color--negative-10 p-4 br-lg br-top-0">br-top-0</div>
            <div class="background-color--negative-10 p-4 br-lg br-right-0">br-right-0</div>
            <div class="background-color--negative-10 p-4 br-lg br-bottom-0">br-bottom-0</div>
        </div>
        <div class="d-flex fw-wrap g-4">
            <div class="background-color--negative-10 p-4 br-lg br-top-left-0">br-top-left-0</div>
            <div class="background-color--negative-10 p-4 br-lg br-top-right-0">br-top-right-0</div>
            <div class="background-color--negative-10 p-4 br-lg br-bottom-right-0">br-bottom-right-0</div>
            <div class="background-color--negative-10 p-4 br-lg br-bottom-left-0">br-bottom-left-0</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div class="br-lg br-left-0">br-left-0</div>
<div class="br-lg br-top-0">br-top-0</div>
<div class="br-lg br-right-0">br-right-0</div>
<div class="br-lg br-bottom-0">br-bottom-0</div>

<div class="br-lg br-top-left-0">br-top-left-0</div>
<div class="br-lg br-top-right-0">br-top-right-0</div>
<div class="br-lg br-bottom-right-0">br-bottom-right-0</div>
<div class="br-lg br-bottom-left-0">br-bottom-left-0</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>