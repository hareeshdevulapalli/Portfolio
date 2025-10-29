// Value Objects following DDD principles
export class Email {
  private readonly value: string;

  constructor(email: string) {
    if (!this.isValid(email)) {
      throw new Error('Invalid email format');
    }
    this.value = email.toLowerCase();
  }

  private isValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Email): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}

export class Url {
  private readonly value: string;

  constructor(url: string) {
    if (!this.isValid(url)) {
      throw new Error('Invalid URL format');
    }
    this.value = url;
  }

  private isValid(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Url): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}

export class SkillProficiency {
  private readonly value: 'beginner' | 'intermediate' | 'advanced' | 'expert';

  constructor(
    proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  ) {
    this.value = proficiency;
  }

  getValue(): 'beginner' | 'intermediate' | 'advanced' | 'expert' {
    return this.value;
  }

  getNumericValue(): number {
    const mapping = {
      beginner: 1,
      intermediate: 2,
      advanced: 3,
      expert: 4,
    };
    return mapping[this.value];
  }

  isHigherThan(other: SkillProficiency): boolean {
    return this.getNumericValue() > other.getNumericValue();
  }

  equals(other: SkillProficiency): boolean {
    return this.value === other.value;
  }
}

export class DateRange {
  private readonly startDate: Date;
  private readonly endDate: Date | null;

  constructor(startDate: Date, endDate: Date | null = null) {
    if (endDate && startDate > endDate) {
      throw new Error('Start date cannot be after end date');
    }
    this.startDate = startDate;
    this.endDate = endDate;
  }

  getStartDate(): Date {
    return this.startDate;
  }

  getEndDate(): Date | null {
    return this.endDate;
  }

  getDurationInMonths(): number {
    const end = this.endDate || new Date();
    const diffTime = end.getTime() - this.startDate.getTime();
    return Math.round(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
  }

  isActive(): boolean {
    return this.endDate === null;
  }

  toString(): string {
    const startStr = this.startDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
    const endStr = this.endDate
      ? this.endDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        })
      : 'Present';
    return `${startStr} - ${endStr}`;
  }
}
