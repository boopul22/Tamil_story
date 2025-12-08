#!/usr/bin/env python3
"""
Script to schedule all draft posts for the next 89 days.
Starting from December 9, 2025, one post per day.
"""

import os
import re
from datetime import datetime, timedelta
from pathlib import Path

# Configuration
DRAFTS_DIR = Path("src/content/drafts")
START_DATE = datetime(2025, 12, 9)  # Tomorrow
EXCLUDE_FILES = {".gitkeep", "README.md", "example-scheduled-post.md"}

def update_frontmatter_date(file_path, pub_date):
    """Update the pubDate in the frontmatter of a markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Format date as "Dec 09 2025"
    date_str = pub_date.strftime("%b %d %Y")
    
    # Replace the pubDate line in frontmatter
    # Match patterns like: pubDate: 'Dec 08 2025' or pubDate: "Dec 08 2025" or pubDate: Dec 08 2025
    pattern = r"(pubDate:\s*['\"]?)([A-Za-z]{3}\s+\d{2}\s+\d{4})(['\"]?)"
    replacement = f"\\1{date_str}\\3"
    
    updated_content = re.sub(pattern, replacement, content)
    
    # Write back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    return date_str

def main():
    """Main function to schedule all posts."""
    # Get all markdown files in drafts directory
    md_files = [
        f for f in DRAFTS_DIR.glob("*.md")
        if f.name not in EXCLUDE_FILES
    ]
    
    # Sort files by name for consistent ordering
    md_files.sort()
    
    print(f"Found {len(md_files)} posts to schedule")
    print(f"Starting from: {START_DATE.strftime('%B %d, %Y')}")
    print("-" * 60)
    
    # Schedule each post
    for i, file_path in enumerate(md_files):
        # Calculate the publish date (START_DATE + i days)
        pub_date = START_DATE + timedelta(days=i)
        
        # Update the frontmatter
        date_str = update_frontmatter_date(file_path, pub_date)
        
        print(f"{i+1:3d}. {file_path.name[:50]:50s} -> {date_str}")
    
    print("-" * 60)
    print(f"✅ Successfully scheduled {len(md_files)} posts!")
    print(f"📅 Posts will be published from {START_DATE.strftime('%B %d, %Y')}")
    print(f"   to {(START_DATE + timedelta(days=len(md_files)-1)).strftime('%B %d, %Y')}")

if __name__ == "__main__":
    main()
