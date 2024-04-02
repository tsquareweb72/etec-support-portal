"use client";

import { useState, useEffect } from "react";

import TicketCard from "./TicketCard";

const TicketCardList = ({ ticketdata, handleIssueClick }) => {
  return (
    <div className='mt-16 ticket_layout'>
      {ticketdata.map((postTicket) => (
        <TicketCard
          key={postTicket._id}
          postTicket={postTicket}
          handleIssueClick={handleIssueClick}
        />
      ))}
    </div>
  );
};

const TicketFeed = () => {
  const [allPostsTickets, setAllPostsTickets] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPostsTickets = async () => {
    const response = await fetch("/api/ticket");
    const ticketdata = await response.json();

    setAllPostsTickets(ticketdata);
  };

  useEffect(() => {
    fetchPostsTickets();
  }, []);

  const filterTickets = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPostsTickets.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.issue) ||
        regex.test(item.ticket)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterTickets(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleIssueClick = (issueName) => {
    setSearchText(issueName);

    const searchResult = filterTickets(issueName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a Ticket'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* All Tickets */}
      {searchText ? (
        <TicketCardList
          ticketdata={searchedResults}
          handleIssueClick={handleIssueClick}
        />
      ) : (
        <TicketCardList ticketdata={allPostsTickets} handleIssueClick={handleIssueClick} />
      )}
    </section>
  );
};

export default TicketFeed;