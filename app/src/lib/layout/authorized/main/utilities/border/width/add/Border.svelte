<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div>
    <h3 id="add">Add border</h3>
    <div class="d-grid g-3 mb-4 p-3 background-color--positive br-md">
        <div class="d-flex fw-wrap g-2">
            <div class="background-color--negative-10 p-4 border">border</div>
            <div class="background-color--negative-10 p-4 border-top">border-top</div>
            <div class="background-color--negative-10 p-4 border-right">border-right</div>
            <div class="background-color--negative-10 p-4 border-bottom">border-bottom</div>
            <div class="background-color--negative-10 p-4 border-left">border-left</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
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