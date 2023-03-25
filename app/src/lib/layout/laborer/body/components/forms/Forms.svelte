<script lang="ts">
    // https://github.com/svelteuidev/svelteui/blob/main/packages/svelteui-core/src/components/Input/Input.svelte
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input

    // import Input from 'component/Input.svelte'
    
    // import Icon from 'component/Icon.svelte'
    // import Button from 'component/Button.svelte'
    // import Precode from 'component/Precode.svelte'

    import SectionText from './text/Text.svelte'
</script>

<article>
    <h2 class="forms">Forms</h2>
    <p>S4 forms have many variants and colors. From these list, you can get info of all avaliable kind of forms.</p>
    <div class="d-grid cols-3 g-1">
        <div>FrmBtn - type button</div>
        <div>FrmChk - type checkbox</div>
        <div>FrmClr - type color</div>
        <div>FrmDat - 1 type date</div>
        <div>FrmDtl - 1 type datetime-local</div>
        <div>FrmEml - 1 type email</div>
        <div>FrmFil - type file</div>
        <div>FrmHdn - type hidden</div>
        <div>FrmImg - type image</div>
        <div>FrmMon - 1 type month</div>
        <div>FrmNum - type number</div>
        <div>FrmPas - 1 type password</div>
        <div>FrmRad - type radio</div>
        <div>FrmRng - type range</div>
        <div>FrmRst - type reset</div>
        <div>FrmSrc - type search</div>
        <div>FrmSbm - type submit</div>
        <div>FrmTel - 1 type tel</div>
        <div>FrmTxt - 1 type text</div>
        <div>FrmTim - 1 type time</div>
        <div>FrmUrl - 1 type url</div>
        <div>FrmWek - 1 type week</div>
    </div>

    <SectionText/>

    <!-- <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>type="text"</b>
            <div>
                <Input type="text" value="any text"/>
            </div>        
        </div>
    </div> -->
</article>