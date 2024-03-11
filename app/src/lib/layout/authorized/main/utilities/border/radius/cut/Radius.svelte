<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div>
    <h4 id="cut">Cut radius</h4>
    <p>
        To remove round of corners use <b>border-radius--0</b> class and for accurate manipulations use <b>border-radius--...-0</b>.
    </p>
    <div class="d-grid g-3 mb-4 p-3 background-color--positive border-radius--md">
        <div class="d-flex fw-wrap g-4">
            <div class="background-color--negative-10 p-4 border-radius--lg border-radius--left-0">border-radius--left-0</div>
            <div class="background-color--negative-10 p-4 border-radius--lg border-radius--top-0">border-radius--top-0</div>
            <div class="background-color--negative-10 p-4 border-radius--lg border-radius--right-0">border-radius--right-0</div>
            <div class="background-color--negative-10 p-4 border-radius--lg border-radius--bottom-0">border-radius--bottom-0</div>
        </div>
        <div class="d-flex fw-wrap g-4">
            <div class="background-color--negative-10 p-4 border-radius--lg border-radius--top-left-0">border-radius--top-left-0</div>
            <div class="background-color--negative-10 p-4 border-radius--lg border-radius--top-right-0">border-radius--top-right-0</div>
            <div class="background-color--negative-10 p-4 border-radius--lg border-radius--bottom-right-0">border-radius--bottom-right-0</div>
            <div class="background-color--negative-10 p-4 border-radius--lg border-radius--bottom-left-0">border-radius--bottom-left-0</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {
`<div class="border-radius--lg border-radius--left-0">border-radius--left-0</div>
<div class="border-radius--lg border-radius--top-0">border-radius--top-0</div>
<div class="border-radius--lg border-radius--right-0">border-radius--right-0</div>
<div class="border-radius--lg border-radius--bottom-0">border-radius--bottom-0</div>

<div class="border-radius--lg border-radius--top-left-0">border-radius--top-left-0</div>
<div class="border-radius--lg border-radius--top-right-0">border-radius--top-right-0</div>
<div class="border-radius--lg border-radius--bottom-right-0">border-radius--bottom-right-0</div>
<div class="border-radius--lg border-radius--bottom-left-0">border-radius--bottom-left-0</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>