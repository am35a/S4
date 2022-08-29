<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="attachment">Attachment</h3>
    <p>
        Add the <b>bga-...</b> classes to container to work with background-attachment.
    </p>
    <div class="d-grid g-3 mb-4 p-2 bgc-positive rounded">
        <div class="bgi bgc-negative-10 bga-scroll p-8" style="--bgi: url(http://placekitten.com/240/240)"></div>
        <div class="bgi bgc-negative-10 bga-fixed bgs-cover p-8" style="--bgi: url(http://placekitten.com/240/240)"></div>
        <div class="bgi bgc-negative-10 bga-local p-8" style="--bgi: url(http://placekitten.com/240/240)"></div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="bgi bga-scroll" style="--bgi: url(http://placekitten.com/240/240)"></div>
<div class="bgi bga-fixed bgs-cover" style="--bgi: url(http://placekitten.com/240/240)"></div>
<div class="bgi bga-local" style="--bgi: url(http://placekitten.com/240/240)"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>