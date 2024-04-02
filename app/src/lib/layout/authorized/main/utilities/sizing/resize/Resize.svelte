<script lang="ts">
    import Precode from 'component/Precode.svelte'
</script>

<section>
    <h3 id="resize">Resize</h3>
    <p>
        The <b>resize--horizontal/vertical/none</b> class can change the resizing options for a text area.
        Also <b>resize--both/horizontal/vertical</b> classes awaliable for other elements such as the
        editable div.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <textarea class="resize--horizontal rounded background-color--negative-10 border-radius--sm">resize--horizontal</textarea>
                <textarea class="resize--vertical rounded background-color--negative-10 border-radius--sm">resize--vertical</textarea>
                <textarea class="resize--none rounded background-color--negative-10 border-radius--sm">resize--none</textarea>
            </div>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div
                    class="resize--both rounded background-color--negative-10 border-radius--sm overflow--auto"
                    contenteditable="true"
                >resize--both for div</div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<textarea class="resize--horizontal"> ... </textarea>
<textarea class="resize--vertical"> ... </textarea>
<textarea class="resize--none"> ... </textarea>

div class="resize--both overflow--auto"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>