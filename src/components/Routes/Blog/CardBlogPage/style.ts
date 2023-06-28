import styled from "styled-components";

export const CardBlogPageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 60px 0 60px 0;
`;

export const CardBlogPageItem = styled.li`
    width: 100%;
    height: auto;
    background: var(--gradient-color);
    border-radius: 5px;
`;

export const CardBlogPageItemContent = styled.div`
    
`;

export const CardBlogPageItemContainer = styled.div`
    
`;

export const CardBlogPageItemMainContent = styled.div`
    
`;

export const CardBlogPageItemContentTop = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 250px;
    .content-top-details {
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      background: linear-gradient(90deg, rgba(129,129,129,.3) 0%, rgba(78,78,78,.3) 100%);
      backdrop-filter: blur( 13.5px );
      -webkit-backdrop-filter: blur( 13.5px );
    }
    .card-blog-page-img {
      width: inherit;
      height: min-content;
      object-fit: cover;
    }
    .card-blog-page-font {
      color: var(--white);
      font-weight: 900;
    }
  
    .card-blog-page-date {
      color: var(--white);
      font-weight: 900;
    }
`;

export const CardBlogPageItemContentBottom = styled.div`
    width: 100%;
    padding: 20px;
    height: 250px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    color: var(--white);
    .card-blog-page-title {
      font-weight: 900;
      font-size: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;  
      -webkit-box-orient: vertical; 
    }
    .card-blog-page-description {
      letter-spacing: 2px;
      margin-bottom: 15px;
      color: var(--quartenary-color);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;  
      -webkit-box-orient: vertical; 
    }
    .card-blog-page-link {
      width: max-content;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      text-transform: none;
      color: var(--white);
    }
    .card-blog-page-link::before {
      position: absolute;
      left: 0;
      bottom: -2px;
      content: "";
      width: 0;
      height: 2px;
      transition: all .3s ease;
      background-color: var(--white);
    }
    .card-blog-page-link:hover::before {
      width: 100%;
    }
`;

