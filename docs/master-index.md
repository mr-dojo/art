# THE MASTER INDEX
**Context:** This is the map. When you need to know how to do something, start here.

---

## Documentation as Infrastructure

These documents aren't just reference material. They're the actual system specification. When a Claude Code agent needs to build, maintain, or operate the Costantino Art website, these documents provide the complete context.

**The Philosophy:**
If natural language is the interface, documentation is the code. The clearer the context, the better the output.

---

## The Document System

### Core Documents (The Foundation)

**1. the-costantino-lineage.md**
- **Purpose:** The foundational story of four generations from iron to canvas
- **Use When:** Understanding the family DNA, explaining motifs, connecting work across generations
- **Key Sections:** The Four Voices (Shadow/Structure/Jazz/Flow), The Through-Line, The Costantino Scroll

**2. collection-taxonomy.md**
- **Purpose:** How artwork is organized, categorized, and presented
- **Use When:** Organizing the collection, building filters, structuring product pages, explaining lineage
- **Key Sections:** The Four Lineages (Iron/Jazz/Flow/Digital), Collection Organization Rules, Metadata Structure

**3. voice-and-tone-guide.md**
- **Purpose:** How to write about the art (what language to use, what to avoid)
- **Use When:** Writing any user-facing content, responding to inquiries, creating product descriptions
- **Key Sections:** Writing Rules, Tone Modulation, Vocabulary Guide, The Story Framework

**4. artist-profiles.md**
- **Purpose:** Concise biographical data focused on what matters for understanding the art
- **Use When:** User asks about an artist, explaining visual elements, providing context for a piece
- **Key Sections:** Individual artist profiles (Calogero, Salvatore, Ralph, Augustine, Stephanie, Carlo), Key Stories to Use

**5. visual-language.md**
- **Purpose:** Design elements, color systems, layout rules for the website
- **Use When:** Building UI, making design decisions, ensuring brand consistency
- **Key Sections:** Color System, Typography, Layout Patterns, Spacing System, The Costantino Scroll

### Operational Documents (The Processes)

**6. commission-protocol.md**
- **Purpose:** Step-by-step process for handling custom artwork requests
- **Use When:** User wants custom work, guiding commission process, managing expectations
- **Key Sections:** The Spec Sheet (Discovery), The Proposal, The Agreement, Commission Pricing Guide

**7. authentication-protocol.md**
- **Purpose:** Process for verifying and cataloging existing Costantino family artwork
- **Use When:** User claims to have Costantino piece, verification requests, creating certificates
- **Key Sections:** Photo Submission, Preliminary Assessment, Registry Number Assignment, Red Flag Scenarios

### Foundational Documents (The Why)

**8. website-design-principles.md**
- **Purpose:** Core philosophy for design and user experience
- **Use When:** Making high-level design decisions, establishing project values
- **Key Directive:** Clarity over decoration, design as conversation

---

## Quick Reference Guide

### "I need to..."

**...describe a piece of art**
→ Check: voice-and-tone-guide.md (The Story Framework)
→ Reference: artist-profiles.md (Key Stories to Use)

**...organize the collection**
→ Check: collection-taxonomy.md (Collection Organization Rules)
→ Reference: Metadata Structure

**...handle a commission request**
→ Check: commission-protocol.md (all stages)
→ Reference: Commission Pricing Guide

**...verify someone's artwork**
→ Check: authentication-protocol.md (all stages)
→ Reference: Registry Number Assignment

**...design a page**
→ Check: visual-language.md (Layout Patterns)
→ Reference: Color System, Typography

**...write product copy**
→ Check: voice-and-tone-guide.md (Writing Rules)
→ Reference: Vocabulary Guide

**...explain the family history**
→ Check: the-costantino-lineage.md (The Four Voices)
→ Reference: artist-profiles.md (individual profiles)

**...price a commission**
→ Check: commission-protocol.md (Commission Pricing Guide)
→ Reference: Price Adjustments

**...handle a difficult user**
→ Check: voice-and-tone-guide.md (Tone Modulation)
→ Reference: commission-protocol.md or authentication-protocol.md (Handling Common Scenarios)

---

## The Decision Trees

### User Interaction Flow

```
User visits site
    ↓
Browsing or Specific Intent?
    ↓
BROWSING:
→ Use voice-and-tone-guide.md (Casual Browsing tone)
→ Reference collection-taxonomy.md (organize presentation)
→ Show art, minimal text
    ↓
User expresses interest in a piece
    ↓
→ Use artist-profiles.md (one-line story)
→ Use voice-and-tone-guide.md (Art First principle)
→ Wait for next question

SPECIFIC INTENT:
→ Commission? → commission-protocol.md
→ Authentication? → authentication-protocol.md
→ Question about artist? → artist-profiles.md
→ General inquiry? → voice-and-tone-guide.md
```

### Commission Flow

```
User: "I want custom art"
    ↓
Stage 1: Initial Inquiry
→ commission-protocol.md (Stage 1)
    ↓
Stage 2: The Spec Sheet
→ commission-protocol.md (Stage 2)
→ Ask all discovery questions
    ↓
Stage 3: The Proposal
→ commission-protocol.md (Stage 3)
→ Use pricing from Commission Pricing Guide
    ↓
Stage 4-8: Follow protocol exactly
→ commission-protocol.md (Stages 4-8)
```

### Authentication Flow

```
User: "I think I have a Costantino"
    ↓
Stage 1: Initial Inquiry
→ authentication-protocol.md (Stage 1)
    ↓
Stage 2: Information Gathering
→ authentication-protocol.md (Stage 2)
    ↓
Stage 3: Photo Submission
→ authentication-protocol.md (Stage 3)
→ Verify photo quality
    ↓
Stage 4: Preliminary Assessment
→ authentication-protocol.md (Stage 4)
→ Check against artist-profiles.md (signature styles)
    ↓
Stage 5-9: Follow protocol exactly
→ authentication-protocol.md (Stages 5-9)
```

---

## Content Hierarchy (What Takes Priority)

### Level 1: The Art Itself
- High-quality images
- Accurate color representation
- Visible texture/brushwork

### Level 2: Essential Metadata
- Artist name
- Title (if known)
- Year, medium, dimensions
- Price (if available)

### Level 3: The One-Line Story
- Single sentence connecting to lineage or context
- Explains a visual element
- Never more than 50 words

### Level 4: Extended Context (Only If Asked)
- Artist background
- Historical context
- Process details

**Critical Rule:** Never jump to Level 4 unless the user asks.

---

## Brand Consistency Checklist

When creating any content, verify:

**Voice:**
- [ ] Direct and concise?
- [ ] Art first, history second?
- [ ] No art jargon?
- [ ] Conversational tone?

**Visual:**
- [ ] Canvas Cream background?
- [ ] Proper color palette (Maui Blue, Scroll Gold, etc.)?
- [ ] Typography hierarchy correct?
- [ ] Art takes up 80% of screen?

**Factual:**
- [ ] Artist attribution correct?
- [ ] Dates accurate?
- [ ] Price current?
- [ ] Registry number format correct?

**Process:**
- [ ] Following the relevant protocol?
- [ ] All required information gathered?
- [ ] User expectations managed?
- [ ] Next steps clear?

---

## Common Mistakes to Avoid

### Content Mistakes
❌ Leading with biography instead of art
❌ Using art jargon ("gestural," "discourse")
❌ Writing paragraphs when one sentence will do
❌ Over-explaining the history
❌ Apologizing for the price

### Design Mistakes
❌ Pure white background
❌ Text overlays on artwork
❌ Distracting animations
❌ Poor image quality
❌ Inconsistent color palette

### Process Mistakes
❌ Skipping the spec sheet (commissions)
❌ Not requesting proper photos (authentication)
❌ Moving to next stage before current stage is complete
❌ Making assumptions instead of asking questions
❌ Pushing the sale instead of serving the user

---

## Updates and Maintenance

### When to Update Documentation

**Immediately:**
- New artist joins family
- Pricing changes
- Process changes
- New service offered
- Contact information changes

**Quarterly:**
- Review and refresh examples
- Update availability status
- Check all links
- Verify all protocols still accurate

**Annually:**
- Comprehensive review of all documents
- Update statistics (authentication success rates, etc.)
- Refresh language to stay current
- Consolidate learnings from past year

### How to Update

1. **Identify:** What needs to change?
2. **Document:** Why is this change necessary?
3. **Modify:** Make the change
4. **Cross-reference:** Does this affect other documents?
5. **Update Master Index:** Note the change
6. **Test:** Verify the change works in practice

---

## Agent Training Scenarios

### Scenario 1: New User, Casual Browse
**Documents Needed:** voice-and-tone-guide.md, collection-taxonomy.md
**Expected Behavior:** Show art, minimal text, wait for interest signals

### Scenario 2: Commission Request
**Documents Needed:** commission-protocol.md (all stages), voice-and-tone-guide.md (tone modulation)
**Expected Behavior:** Guide through spec sheet, manage expectations, clarity over speed

### Scenario 3: Authentication Request
**Documents Needed:** authentication-protocol.md (all stages), artist-profiles.md (signature verification)
**Expected Behavior:** Request photos, preliminary assessment, professional verification

### Scenario 4: Question About Artist
**Documents Needed:** artist-profiles.md, voice-and-tone-guide.md (The Story Framework)
**Expected Behavior:** One-line DNA, connect to visual element, offer more if asked

### Scenario 5: Design Decision
**Documents Needed:** visual-language.md, website-design-principles.md
**Expected Behavior:** Follow design system, art-first principle, consistency check

---

## The Meta-Document

This Master Index is itself documentation. It should be updated as the system evolves. Think of it as the README for the entire Costantino Art documentation infrastructure.

**Current Version:** 1.0
**Last Updated:** November 23, 2025
**Maintained By:** Carlo Costantino
**Next Review Date:** February 23, 2026

---

## Final Principles

### 1. Context Is Currency
The more context a model has, the better it performs. These documents provide that context.

### 2. Documentation Is Infrastructure
When natural language is the interface, clear documentation becomes the actual building material.

### 3. Art First, Always
Every decision, every word, every pixel serves the art.

### 4. Clarity Eliminates Anxiety
For users, for agents, for everyone in the system.

### 5. The System Serves the Legacy
145 years of artistic excellence. That's what we're protecting and presenting.

---

## Where to Start

**If you're building the website:**
→ Start with visual-language.md and website-design-principles.md

**If you're operating as the gallery agent:**
→ Start with the-costantino-lineage.md and voice-and-tone-guide.md

**If you're handling specific requests:**
→ Jump to commission-protocol.md or authentication-protocol.md

**If you need background:**
→ Read the-costantino-lineage.md and artist-profiles.md

**If you're lost:**
→ You're here. Read this document again. Follow the decision trees.

---

## Contact & Support

**Primary Contact:** Carlo Costantino (Mr. Dojo)
**Website:** CostantinoArt.com
**Documentation Repository:** This repository

**For Documentation Questions:**
- Check this Master Index first
- Review the relevant document
- If still unclear, consult Carlo

**For Technical Issues:**
- Reference visual-language.md for design questions
- Check protocols for process questions
- Escalate to Carlo if needed

---

Remember: These documents exist to make the system better. If something isn't working, the documentation should be updated. This is living infrastructure, not static reference.

**Build with words. Context, not code.**
