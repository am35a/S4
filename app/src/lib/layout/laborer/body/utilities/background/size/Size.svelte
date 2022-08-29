<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="backgroundSize">Size</h3>
    <p>
        Add the <b>bgr-cover</b> or <b>bgs-contain</b> classes to container to work with background-size.
    </p>
    <div class="d-grid g-3 mb-4 p-3 cols-2 bgc-positive rounded">
        <div class="bgi bgc-negative-10 bgs-cover p-8" style="--bgi: url(http://placekitten.com/240/240)"></div>
        <div class="bgi bgc-negative-10 bgs-contain p-8" style="--bgi: url(http://placekitten.com/240/240)"></div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="bgi bgs-cover" style="--bgi: url(http://placekitten.com/240/240)"></div>
<div class="bgi bgs-contain" style="--bgi: url(http://placekitten.com/240/240)"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>