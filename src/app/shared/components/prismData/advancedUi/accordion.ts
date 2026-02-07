export let 
accordionReuse =`<div ngbAccordion [closeOthers]="closeOthers" [class]="accodionClass" [id]="accordionId">
@for(item of accordionItems;track $index){
    <ng-container>
      <div ngbAccordionItem [class]="item.accodionItemClass" [collapsed]="item.collapsed">
        <h2 ngbAccordionHeader [id]="item.headingId">
          <button ngbAccordionButton type="button" data-bs-toggle="collapse" [attr.data-bs-target]="item.collapseId" [attr.aria-expanded]="!item.collapsed" [attr.aria-controls]="item.collapseId">
            {{ item.title }}
          </button>
        </h2>
        <div [id]="item.collapseId" ngbAccordionCollapse [attr.aria-labelledby]="item.headingId">
          <div ngbAccordionBody [innerHTML]="item.body">
            {{ item.body }}
          </div>
        </div>
      </div>
    </ng-container>
}
</div>`
export let 
accordion1 = `<div ngbAccordion id="accordionExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" ngbAccordionCollapse
        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseTwo" ngbAccordionCollapse aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseThree" ngbAccordionCollapse aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the <code>.accordion-body</code>, though the
            transition
            does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordionTs = `
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/advancedUi/accordion';
import * as tsCode from '../../../shared/prismData/alert';
@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent {
  panels = ['Accordion Item #1', 'Accordion Item #2', 'Accordion Item #3'];
}`,

accordion2 = `<div ngbAccordion id="accordionPanelsStayOpenExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="panelsStayOpen-headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingOne">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="panelsStayOpen-headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingTwo">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. You can modify any of
            this
            with custom CSS or overriding our default variables. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="panelsStayOpen-headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" ngbAccordionCollapse
        aria-labelledby="panelsStayOpen-headingThree">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. You can modify any of
            this
            with custom CSS or overriding our default variables. It's also worth
            noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion3 = `<div ngbAccordion id="accordionFlushExample">
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="flush-collapseOne" ngbAccordionCollapse aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            first item's accordion body.</div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="flush-collapseTwo" ngbAccordionCollapse aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            second item's accordion body. Let's imagine this being filled
            with
            some
            actual content.</div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="flush-headingThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree" aria-expanded="false"
            aria-controls="flush-collapseThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="flush-collapseThree" ngbAccordionCollapse aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample">
        <div ngbAccordionBody>Placeholder content for this accordion,
            which is
            intended to demonstrate the <code>.accordion-flush</code> class.
            This is
            the
            third item's accordion body. Nothing more exciting happening
            here in
            terms
            of content, but just filling up the space to make it look, at
            least
            at
            first
            glance, a bit more representative of how this would look in a
            real-world
            application.</div>
    </div>
</div>
</div>`,
accordion4 = `<div ngbAccordion class="accordion-primary" id="accordionPrimaryExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingPrimaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryOne" aria-expanded="true"
            aria-controls="collapsePrimaryOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsePrimaryOne" ngbAccordionCollapse aria-labelledby="headingPrimaryOne"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryTwo" aria-expanded="false"
            aria-controls="collapsePrimaryTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsePrimaryTwo" ngbAccordionCollapse aria-labelledby="headingPrimaryTwo"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryThree" aria-expanded="false"
            aria-controls="collapsePrimaryThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsePrimaryThree" ngbAccordionCollapse aria-labelledby="headingPrimaryThree"
        data-bs-parent="#accordionPrimaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion5 = `<div ngbAccordion class="accordion-secondary" id="accordionSecondaryExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingSecondaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryOne" aria-expanded="true"
            aria-controls="collapseSecondaryOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseSecondaryOne" ngbAccordionCollapse aria-labelledby="headingSecondaryOne"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryTwo" aria-expanded="false"
            aria-controls="collapseSecondaryTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseSecondaryTwo" ngbAccordionCollapse aria-labelledby="headingSecondaryTwo"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryThree" aria-expanded="false"
            aria-controls="collapseSecondaryThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseSecondaryThree" ngbAccordionCollapse aria-labelledby="headingSecondaryThree"
        data-bs-parent="#accordionSecondaryExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion6= `<div ngbAccordion class="accordion-solid-primary" id="accordionPrimarySolidExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingPrimarySolidOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidOne" aria-expanded="true"
            aria-controls="collapsePrimarySolidOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsePrimarySolidOne" ngbAccordionCollapse aria-labelledby="headingPrimarySolidOne"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimarySolidTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidTwo" aria-expanded="false"
            aria-controls="collapsePrimarySolidTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsePrimarySolidTwo" ngbAccordionCollapse aria-labelledby="headingPrimarySolidTwo"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingPrimarySolidThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidThree" aria-expanded="false"
            aria-controls="collapsePrimarySolidThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsePrimarySolidThree" ngbAccordionCollapse aria-labelledby="headingPrimarySolidThree"
        data-bs-parent="#accordionPrimarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion7 = `<div ngbAccordion class=" accordion-solid-secondary" id="accordionSecondarySolidExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingSecondarySolidOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidOne" aria-expanded="true"
            aria-controls="collapseSecondarySolidOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseSecondarySolidOne" ngbAccordionCollapse aria-labelledby="headingSecondarySolidOne"
        data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondarySolidTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidTwo" aria-expanded="false"
            aria-controls="collapseSecondarySolidTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseSecondarySolidTwo" ngbAccordionCollapse aria-labelledby="headingSecondarySolidTwo"
        data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingSecondarySolidThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidThree" aria-expanded="false"
            aria-controls="collapseSecondarySolidThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseSecondarySolidThree" ngbAccordionCollapse
        aria-labelledby="headingSecondarySolidThree" data-bs-parent="#accordionSecondarySolidExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion8 = `<div ngbAccordion class=" accordion-border-primary accordions-items-seperate"
id="accordionprimaryborderExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingborderprimaryOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderOne" aria-expanded="true" aria-controls="primaryBorderOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="primaryBorderOne" ngbAccordionCollapse aria-labelledby="headingborderprimaryOne"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingborderprimaryTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderTwo" aria-expanded="false" aria-controls="primaryBorderTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="primaryBorderTwo" ngbAccordionCollapse aria-labelledby="headingborderprimaryTwo"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingborderprimaryThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderThree" aria-expanded="false"
            aria-controls="primaryBorderThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="primaryBorderThree" ngbAccordionCollapse aria-labelledby="headingborderprimaryThree"
        data-bs-parent="#accordionprimaryborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion9 = `<div ngbAccordion class=" accordion-border-success accordions-items-seperate"
id="accordionsuccessborderExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingbordersuccessOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderOne" aria-expanded="true" aria-controls="successBorderOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="successBorderOne" ngbAccordionCollapse aria-labelledby="headingbordersuccessOne"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingbordersuccessTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderTwo" aria-expanded="false" aria-controls="successBorderTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="successBorderTwo" ngbAccordionCollapse aria-labelledby="headingbordersuccessTwo"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingbordersuccessThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderThree" aria-expanded="false"
            aria-controls="successBorderThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="successBorderThree" ngbAccordionCollapse aria-labelledby="headingbordersuccessThree"
        data-bs-parent="#accordionsuccessborderExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion10 = `<p class="mb-0">
<a class="btn btn-primary collapsed mb-2 me-1" (click)="collapse.toggle()" data-bs-toggle="collapse"
    role="button" [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
    Link with href
</a>
<button class="btn btn-secondary collapsed mb-2" (click)="isCollapsed = !isCollapsed" type="button"
    data-bs-toggle="collapse" data-bs-target="#collapseExample" [attr.aria-expanded]="!isCollapsed"
    aria-controls="collapseExample">
    Button with data-bs-target
</button>
</p>
<div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed" id="collapseExample">
<div class="card card-body mb-0">
    Some placeholder content for the collapse component. This panel
    is
    hidden by default but revealed when the user activates the
    relevant
    trigger.
</div>
</div>`,
accordion11 = `<p class="mb-0">
<a class="btn btn-primary mb-2 me-1" (click)="isCollapsed1 = !isCollapsed1" role="button"
    [attr.aria-expanded]="!isCollapsed1" [attr.aria-controls]="'multiCollapseExample1'">Toggle
    first element</a>
<button class="btn btn-success mb-2 me-1" (click)="isCollapsed2 = !isCollapsed2"
    [attr.aria-expanded]="!isCollapsed2" [attr.aria-controls]="'multiCollapseExample2'">Toggle
    second element</button>
<button class="btn btn-danger mb-2 me-1"
    (click)="isCollapsed1 = !isCollapsed1; isCollapsed2 = !isCollapsed2"
    [attr.aria-expanded]="!isCollapsed1 && !isCollapsed2"
    [attr.aria-controls]="'multiCollapseExample1 multiCollapseExample2'">Toggle both
    elements</button>
</p>
<div class="row">
<div class="col m-1">
    <div class="collapse multi-collapse" id="multiCollapseExample1" [ngbCollapse]="isCollapsed1">
        <div class="card card-body mb-0 shadow-none">
            Some placeholder content for the first collapse component of this multi-collapse
            example. This panel is hidden by default but revealed when the user activates the
            relevant trigger.
        </div>
    </div>
</div>
<div class="col m-1">
    <div class="collapse multi-collapse" id="multiCollapseExample2" [ngbCollapse]="isCollapsed2">
        <div class="card card-body mb-0 shadow-none">
            Some placeholder content for the second collapse component of this multi-collapse
            example. This panel is hidden by default but revealed when the user activates the
            relevant trigger.
        </div>
    </div>
</div>
</div>`,
accordion12 = `<div ngbAccordion class=" accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingcustomicon1One">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1One" aria-expanded="true"
            aria-controls="collapsecustomicon1One">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsecustomicon1One" ngbAccordionCollapse aria-labelledby="headingcustomicon1One"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingcustomicon1Two">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1Two" aria-expanded="false"
            aria-controls="collapsecustomicon1Two">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsecustomicon1Two" ngbAccordionCollapse aria-labelledby="headingcustomicon1Two"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingcustomicon1Three">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1Three" aria-expanded="false"
            aria-controls="collapsecustomicon1Three">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsecustomicon1Three" ngbAccordionCollapse aria-labelledby="headingcustomicon1Three"
        data-bs-parent="#accordioncustomicon1Example">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion13 = `<div ngbAccordion class=" customized-accordion accordions-items-seperate" id="customizedAccordion">
<div ngbAccordionItem [collapsed]="false" class="custom-accordion-primary">
    <h2 ngbAccordionHeader id="customizedAccordionOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionOne" aria-expanded="true"
            aria-controls="customized-AccordionOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="customized-AccordionOne" ngbAccordionCollapse aria-labelledby="customizedAccordionOne"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem class=" custom-accordion-secondary">
    <h2 ngbAccordionHeader id="customizedAccordionTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionTwo" aria-expanded="false"
            aria-controls="customized-AccordionTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="customized-AccordionTwo" ngbAccordionCollapse aria-labelledby="customizedAccordionTwo"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem class=" custom-accordion-danger">
    <h2 ngbAccordionHeader id="customizedAccordionThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionThree" aria-expanded="false"
            aria-controls="customized-AccordionThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="customized-AccordionThree" ngbAccordionCollapse aria-labelledby="customizedAccordionThree"
        data-bs-parent="#customizedAccordion">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
</div>`,
accordion14 = `<div ngbAccordion class=" accordionicon-left accordions-items-seperate" id="accordioniconLeftExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingleftOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseleftOne" aria-expanded="true" aria-controls="collapseleftOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapseleftOne" ngbAccordionCollapse aria-labelledby="headingleftOne"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingleftTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseLeftTwo" aria-expanded="false" aria-controls="collapseLeftTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapseLeftTwo" ngbAccordionCollapse aria-labelledby="headingleftTwo"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingleftThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseLeftThree" aria-expanded="false" aria-controls="collapseLeftThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapseLeftThree" ngbAccordionCollapse aria-labelledby="headingleftThree"
        data-bs-parent="#accordioniconLeftExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
</div>`,
accordion15 = `<div ngbAccordion class=" accordionicon-none accordions-items-seperate" id="accordioniconnoIconExample">
<div ngbAccordionItem [collapsed]="false">
    <h2 ngbAccordionHeader id="headingnoIconOne">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconOne" aria-expanded="true" aria-controls="collapsenoIconOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="collapsenoIconOne" ngbAccordionCollapse aria-labelledby="headingnoIconOne"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingnoIconTwo">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconTwo" aria-expanded="false" aria-controls="collapsenoIconTwo">
            Accordion Item #2
        </button>
    </h2>
    <div id="collapsenoIconTwo" ngbAccordionCollapse aria-labelledby="headingnoIconTwo"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
<div ngbAccordionItem>
    <h2 ngbAccordionHeader id="headingnoIconThree">
        <button ngbAccordionButton type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconThree" aria-expanded="false"
            aria-controls="collapsenoIconThree">
            Accordion Item #3
        </button>
    </h2>
    <div id="collapsenoIconThree" ngbAccordionCollapse aria-labelledby="headingnoIconThree"
        data-bs-parent="#accordioniconnoIconExample">
        <div ngbAccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit
            overflow.
        </div>
    </div>
</div>
</div>`,
accordion16 = `<p>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" (click)="collapse.toggle()"
    data-bs-target="#collapseWidthExample" [attr.aria-expanded]="!isCollapsed"
    aria-controls="collapseWidthExample">
    Toggle width collapse
</button>
</p>
<div style="min-height: 120px;">
<div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed" [horizontal]="true" style="max-width: 300px"
    id="collapseWidthExample">
    <div class="card card-body" style="width: 230px;">
        This is some placeholder content for a horizontal collapse. It's
        hidden
        by default and shown when triggered.
    </div>
</div>
</div>`;