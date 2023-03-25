<script lang="ts">
    import FrmTxt from "component/FrmTxt.svelte"

    let bindtext: string = ''

</script>

<section>
    <h3 id="text">Text</h3>
    <p>
        <b>FrmTxt</b>
    </p>
    <div class="d-grid">
        <FrmTxt bind:value={bindtext} placeholder="placeholder">
            <svelte:fragment slot="label">Label</svelte:fragment>
        </FrmTxt>
        <FrmTxt bind:value={bindtext} placeholder="placeholder">
            <svelte:fragment slot="label">Label</svelte:fragment>
        </FrmTxt>
    </div>
    <hr class="my-4">
    {bindtext}
</section>