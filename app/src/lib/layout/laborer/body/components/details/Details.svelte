<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Details from "src/components/Details.svelte"
    import Precode from "src/components/Precode.svelte"
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Details</div>
    <div class="d-grid">
        <Details class="dtl-primary-">
            <svelte:fragment slot="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </svelte:fragment>
            <svelte:fragment slot="body">
                <div class="bg-positive">
                    <hr class="mx-2 border-secondary">
                    <div class="p-4">
                        Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                    </div>
                </div>
            </svelte:fragment>
        </Details>
    </div>
</section>