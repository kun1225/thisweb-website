import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionTitle, AccordionContent } from '@/src/shared/ui/Accordion';

describe('Accordion', () => {
  describe('Accordion initial state', () => {
    it('render correct title and content', () => {
      render(
        <Accordion stretch initExpanded>
          <AccordionTitle>Test Title</AccordionTitle>
          <AccordionContent>Test Content</AccordionContent>
        </Accordion>
      );

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
    it('should show content when initExpanded is true', () => {
      const { getByTestId } = render(
        <Accordion initExpanded>
          <AccordionTitle>Title</AccordionTitle>
          <AccordionContent>Content</AccordionContent>
        </Accordion>
      );

      const accordionContent = getByTestId('accordionContent');
      expect(accordionContent).toHaveClass('grid-rows-[1fr]');
    });

    it('should hide content when initExpanded is false', () => {
      render(
        <Accordion initExpanded={false}>
          <AccordionTitle>Title</AccordionTitle>
          <AccordionContent>Content</AccordionContent>
        </Accordion>
      );

      const accordionContent = screen.getByTestId('accordionContent');
      expect(accordionContent).not.toHaveClass('grid-rows-[1fr]');
    });
  });

  describe('Accordion icon position', () => {
    it('should place the icon on the left when iconPosition is left', () => {
      render(
        <Accordion iconPosition="left">
          <AccordionTitle>Title</AccordionTitle>
          <AccordionContent>Content</AccordionContent>
        </Accordion>
      );
      const accordionIcon = screen.getByTestId('accordionIcon-left');
      expect(accordionIcon).toBeInTheDocument();
    });

    it('should place the icon on the right when iconPosition is right', () => {
      render(
        <Accordion iconPosition="right">
          <AccordionTitle>Title</AccordionTitle>
          <AccordionContent>Content</AccordionContent>
        </Accordion>
      );
      const accordionIcon = screen.getByTestId('accordionIcon-right');
      expect(accordionIcon).toBeInTheDocument();
    });
  });

  describe('Accordion toggle functionality', () => {
    it('renders and toggles the content visibility', () => {
      render(
        <Accordion stretch initExpanded>
          <AccordionTitle>Test Title</AccordionTitle>
          <AccordionContent>Test Content</AccordionContent>
        </Accordion>
      );

      const accordionTitle = screen.getByTestId('accordionTitle');
      const accordionContent = screen.getByTestId('accordionContent');

      // Check initial render
      expect(accordionTitle).toBeInTheDocument();
      expect(accordionContent).toHaveClass('grid-rows-[1fr]');

      // Toggle visibility
      fireEvent.click(accordionTitle);
      expect(accordionContent).not.toHaveClass('grid-rows-[1fr]');

      // Toggle back
      fireEvent.click(accordionTitle);
      expect(accordionContent).toHaveClass('grid-rows-[1fr]');
    });
  });

  describe('Accordion stretch  functionality', () => {
    it('should toggle content visibility on icon click and not on title', () => {
      render(
        <Accordion initExpanded={false} iconPosition="left">
          <AccordionTitle>Title</AccordionTitle>
          <AccordionContent>Content</AccordionContent>
        </Accordion>
      );

      const accordionIcon = screen.getByTestId('accordionIcon-left');
      const accordionTitle = screen.getByTestId('accordionTitle');
      const accordionContent = screen.getByTestId('accordionContent');

      // Click to show
      fireEvent.click(accordionIcon);
      expect(accordionContent).toHaveClass('grid-rows-[1fr]');

      // Click again to hide
      fireEvent.click(accordionIcon);
      expect(accordionContent).not.toHaveClass('grid-rows-[1fr]');

      // Click title will not show content
      fireEvent.click(accordionTitle);
      expect(accordionContent).not.toHaveClass('grid-rows-[1fr]');
    });
  });
});
