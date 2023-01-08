import React from 'react';
import {
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo
} from 'gatsby-theme-portfolio-minimal';
import { firebaseConfig } from '../utils/firebase';
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

export default function IndexPage() {
  React.useEffect(() => {
    function setupFirebaseAnalytics() {
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      if (analytics) {
        logEvent(analytics, 'page_visited');
      }
    }
    setupFirebaseAnalytics();
  }, []);
  return (
    <>
      <Seo title="Tahmid Rahman Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects I worked on" />
        <ContactSection sectionId="contact" heading="Interested to hire me?" />
      </Page>
    </>
  );
}
