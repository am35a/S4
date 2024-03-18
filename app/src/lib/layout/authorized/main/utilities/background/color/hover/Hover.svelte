<script>
    import Precode from 'component/Precode.svelte'
</script>
<div>
    <h4 id="hover">Hover</h4>
    <p>
        To change the background color by hover, just add <b>:hover</b> to any background color.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="p-4 background-color--success-m:hover">
                    background-color--success-m:hover
                </div>
            </div>
        </div>        
        <div class="display--grid g-4">
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