<script>
    import Precode from 'component/Precode.svelte'
</script>
<div>
    <h4 id="hover">Hover</h4>
    <p>
        To change the background color by hover, just add <b>:hover</b> to any background color.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="padding--md background-color--success-m:hover">
                    background-color--success-m:hover
                </div>
            </div>
        </div>        
        <div class="display--grid gap--md">
            <b>HTML</b>
            <Precode>
                {
`<div class="background-color--success-m:hover"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</div>