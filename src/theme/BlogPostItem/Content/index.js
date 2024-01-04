import React from 'react';
import clsx from 'clsx';
import { blogPostContainerID } from '@docusaurus/utils-common';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import MDXContent from '@theme/MDXContent';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function BlogPostItemContent({ children, className }) {
  const { isBlogPostPage } = useBlogPost();
  const { colorMode } = useColorMode();
  const {siteConfig} = useDocusaurusContext();
  const {forbiddenGiscusBlogPaths} = siteConfig.customFields;
  const location = useLocation();
  const giscus = (
    <React.Fragment>
      <hr />
      <br></br>
      <Giscus
        id="comments"
        repo="farlowdw/realanalysis-blog"
        repoId="R_kgDOLA7BkA"
        category="Announcements"
        categoryId="DIC_kwDOLA7BkM4CcNAP"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </React.Fragment>
  )
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className)}
      itemProp="articleBody">
      <MDXContent>
        {children}
        {isBlogPostPage && !forbiddenGiscusBlogPaths.includes(location.pathname) && giscus}
      </MDXContent>
    </div>
  );
}
