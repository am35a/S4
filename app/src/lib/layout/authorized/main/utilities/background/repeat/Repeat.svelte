<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="backgroundRepeat">Repeat</h3>
    <p>
        Add the <b>bgr-...</b> classes to container to work with background-position.
    </p>
    <div class="d-grid g-3 mb-4 p-3 cols-4 bgc-positive br">
        <div class="bgi bgc-negative-10 bgr-x p-8" style="--bgi: url(http://placekitten.com/32/32)"></div>
        <div class="bgi bgc-negative-10 bgr-y p-8" style="--bgi: url(http://placekitten.com/32/32)"></div>
        <div class="bgi bgc-negative-10 bgr-space p-8" style="--bgi: url(http://placekitten.com/32/32)"></div>
        <div class="bgi bgc-negative-10 bgr-round p-8" style="--bgi: url(http://placekitten.com/28/28)"></div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div class="bgi bgc-negative-10 bgr-x" style="--bgi: url(http://placekitten.com/32/32)"></div>
<div class="bgi bgc-negative-10 bgr-y" style="--bgi: url(http://placekitten.com/32/32)"></div>
<div class="bgi bgc-negative-10 bgr-space" style="--bgi: url(http://placekitten.com/32/32)"></div>
<div class="bgi bgc-negative-10 bgr-round" style="--bgi: url(http://placekitten.com/28/28)"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>