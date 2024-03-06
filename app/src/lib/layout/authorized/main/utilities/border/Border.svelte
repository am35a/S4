<script lang="ts">
    import SectionWidth from './width/Width.svelte'
    import SectionColor from './color/Color.svelte'
    import SectionRadius from './radius/Radius.svelte'
</script>

<article>

    <div class="d-grid g-3 mb-4 p-3 bgc-positive br-md">
        <div class="d-flex fw-wrap g-2">
            <div
                class="bgc-negative-10 p-4
                    brdr
                "
            >border</div>
            <div
                class="bgc-negative-10 p-4
                    brdr-top
                "
            >border-top</div>
            <div
                class="bgc-negative-10 p-4
                    brdr-right
                "
            >border-right</div>
            <div
                class="bgc-negative-10 p-4
                    brdr-bottom
                "
            >border-bottom</div>
            <div
                class="bgc-negative-10 p-4
                    brdr-left
                "
            >border-left</div>
        </div>
    </div>



    <hr>
    <h2 id="border">Border</h2>
    <SectionWidth />
    <SectionColor />
    <SectionRadius />
</article>