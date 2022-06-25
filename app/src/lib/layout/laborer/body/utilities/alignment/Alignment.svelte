<script lang="ts">
    import Precode from "src/components/Precode.svelte"

</script>

<section>
    <div class="h2" aria-level={2} role="heading">Alignment</div>
    <div class="d-grid">
        <div class="h3" aria-level={3} role="heading">Vertical alignment</div>
        <p>...</p>
        <div class="d-grid g-2 overflow-x-auto">
            <div class="col-span-full row-span-full my-auto border-bottom border-secondary"><!-- base line indicator--></div>
            <div class="col-span-full row-span-full lh-lg">
                <span class="bg-positive px-1 rounded align-baseline">baseline</span>
                <span class="bg-positive px-1 rounded align-top">top</span>
                <span class="bg-positive px-1 rounded align-middle">middle</span>
                <span class="bg-positive px-1 rounded align-bottom">bottom</span>
                <span class="bg-positive px-1 rounded align-text-bottom">text-bottom</span>
                <span class="bg-positive px-1 rounded align-text-top">text-top</span>
            </div>
        </div>
        <Precode>
            {
`<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-bottom">text-bottom</span>
<span class="align-text-top">text-top</span>`
            }
        </Precode>
    </div>
</section>