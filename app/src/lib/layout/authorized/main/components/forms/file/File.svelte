<script lang="ts">
    import Input from 'component/Input.svelte'

    export let inputClass: string = ''
</script>

<section>
    <h3 id="file">File</h3>
    <div class="display--grid g-5">
        <div class="display--flex g-4 flex-wrap--wrap justify-content--evenly p-4 background-color--positive border-radius--md">
            <div class="display--grid gtc-2 g-3">
                <b class="justify-self--end align-self--center">Default</b>
                <div>
                    <Input class={inputClass} type="file"/>
                </div>
                <b class="justify-self--end align-self--center">Active</b>
                <div>
                    <Input class="{inputClass} active" type="file"/>
                </div>
                <b class="justify-self--end align-self--center">Disabled</b>
                <div>
                    <Input class={inputClass} type="file" disabled/>
                </div>
                <b class="justify-self--end align-self--center">Active & Disabled</b>
                <div>
                    <Input class="{inputClass} active" type="file" disabled/>
                </div>
            </div>
        </div>        
    </div>
</section>