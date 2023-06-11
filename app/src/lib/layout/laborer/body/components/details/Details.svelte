<script lang="ts">
    // import Icon from 'component/Icon.svelte'
    import Details from 'component/Details.svelte'
    // import Precode from 'component/Precode.svelte'
</script>

<section>
    <h2>Details</h2>
    <div class="d-grid g-4">
        <Details class="dtl-primary">
            <svelte:fragment slot="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </svelte:fragment>
            <svelte:fragment slot="body">
                <div class="bgc-positive- m-1-">
                    <!-- <hr class="mx-2 border-secondary"> -->
                    <div class="p-4">
                        Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                    </div>
                </div>
            </svelte:fragment>
        </Details>
        <Details class="dtl-primary" open>
            <svelte:fragment slot="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </svelte:fragment>
            <svelte:fragment slot="body">
                <div class="bgc-positive- m-1-">
                    <!-- <hr class="mx-2 border-secondary"> -->
                    <div class="p-4">
                        Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                    </div>
                </div>
            </svelte:fragment>
        </Details>
    </div>
</section>