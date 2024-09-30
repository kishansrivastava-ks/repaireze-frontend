/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import blogData from "../../../data/blog_data.json";
import { Link } from "react-router-dom";
import Modal from "react-modal"; // Import Modal component
import { toast } from "react-hot-toast"; // Import react-hot-toast

const BlogGridWithFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddBlogModalOpen, setIsAddBlogModalOpen] = useState(false); // State for Add Blog modal
  const [isBlogDetailsModalOpen, setIsBlogDetailsModalOpen] = useState(false); // State for Blog Details modal
  const [selectedBlog, setSelectedBlog] = useState(null); // State for selected blog details
  const [newBlog, setNewBlog] = useState({
    title: "",
    subtitle: "",
    type: "",
    brand: "",
    date: "",
    thumbnail: "",
  }); // New blog form data

  const cardsPerPage = 12;

  // Unique types and brands from blog data for filtering options
  const uniqueTypes = [...new Set(blogData.map((blog) => blog.type))];
  const uniqueBrands = [...new Set(blogData.map((blog) => blog.brand))];

  // Handle search
  const handleSearch = (event) => setSearchTerm(event.target.value);

  // Handle checkbox change for types and brands
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Filter and search blog cards
  const filteredBlogs = blogData.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = selectedTypes.length
      ? selectedTypes.includes(blog.type)
      : true;
    const matchesBrand = selectedBrands.length
      ? selectedBrands.includes(blog.brand)
      : true;
    return matchesSearch && matchesType && matchesBrand;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / cardsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  // Handle Add Blog Modal open/close
  const openAddBlogModal = () => setIsAddBlogModalOpen(true);
  const closeAddBlogModal = () => setIsAddBlogModalOpen(false);

  // Handle Blog Details Modal open/close
  const openBlogDetailsModal = (blog) => {
    setSelectedBlog(blog);
    setIsBlogDetailsModalOpen(true);
  };
  const closeBlogDetailsModal = () => setIsBlogDetailsModalOpen(false);

  // Handle form input change for new blog
  const handleNewBlogChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  // Add new blog logic
  const addNewBlog = () => {
    if (
      !newBlog.title ||
      !newBlog.subtitle ||
      !newBlog.type ||
      !newBlog.brand ||
      !newBlog.date ||
      !newBlog.thumbnail
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    blogData.push(newBlog); // In production, this should be sent to a server
    setIsAddBlogModalOpen(false);
    toast.success("Blog added successfully!");
    // You would need to update state and persist this change in localStorage or a backend server in production
  };

  return (
    <Container>
      <LeftColumn>
        <SearchBar
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <FilterSection>
          <FilterHeading>Filter By Device Type</FilterHeading>
          {uniqueTypes.map((type) => (
            <FilterCheckbox key={type}>
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              {type}
            </FilterCheckbox>
          ))}
        </FilterSection>
        <AddBlogButton onClick={openAddBlogModal}>Add Blog</AddBlogButton>
      </LeftColumn>

      <RightColumn>
        <BlogGrid>
          {displayedBlogs.map((blog, index) => (
            <BlogCard key={index} onClick={() => openBlogDetailsModal(blog)}>
              <Thumbnail src={blog.thumbnail} alt={blog.title} />
              <CardTitle>{blog.title}</CardTitle>
              <CardSubtitle>{blog.subtitle}</CardSubtitle>
              <CardDate>{blog.date}</CardDate>
            </BlogCard>
          ))}
        </BlogGrid>

        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PageNumber
              key={page}
              onClick={() => handlePageChange(page)}
              active={currentPage === page}
            >
              {page}
            </PageNumber>
          ))}
        </Pagination>
      </RightColumn>

      {/* Add Blog Modal */}
      <Modal isOpen={isAddBlogModalOpen} onRequestClose={closeAddBlogModal}>
        <h2>Add New Blog</h2>
        <input
          name="title"
          placeholder="Title"
          onChange={handleNewBlogChange}
        />
        <input
          name="subtitle"
          placeholder="Subtitle"
          onChange={handleNewBlogChange}
        />
        <input name="type" placeholder="Type" onChange={handleNewBlogChange} />
        <input
          name="brand"
          placeholder="Brand"
          onChange={handleNewBlogChange}
        />
        <input name="date" placeholder="Date" onChange={handleNewBlogChange} />
        <input
          name="thumbnail"
          placeholder="Image URL"
          onChange={handleNewBlogChange}
        />
        <button onClick={addNewBlog}>Submit</button>
        <button onClick={closeAddBlogModal}>Close</button>
      </Modal>

      {/* Blog Details Modal */}
      {selectedBlog && (
        <Modal
          isOpen={isBlogDetailsModalOpen}
          onRequestClose={closeBlogDetailsModal}
        >
          <h2>{selectedBlog.title}</h2>
          <img src={selectedBlog.thumbnail} alt={selectedBlog.title} />
          <p>{selectedBlog.subtitle}</p>
          <p>{selectedBlog.type}</p>
          <p>{selectedBlog.brand}</p>
          <p>{selectedBlog.date}</p>
          <button onClick={closeBlogDetailsModal}>Close</button>
        </Modal>
      )}
    </Container>
  );
};

export default BlogGridWithFilter;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 1rem;
  border-right: 1px solid #ddd;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const FilterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const FilterHeading = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const FilterCheckbox = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  input {
    margin-right: 0.5rem;
  }
`;

const RightColumn = styled.div`
  flex: 3;
  padding: 1rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardDate = styled.span`
  font-size: 0.9rem;
  color: #aaa;
  padding: 0 0.5rem;
  display: block;
  margin-bottom: 1rem;
`;

const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const PageNumber = styled.span`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#007bff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#007bff")};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const AddBlogButton = styled.button`
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
