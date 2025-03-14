// filepath: /Users/autentika/Downloads/RN/react-native-clean-architecture/src/github/infrastructure/models/GithubUserModel.ts
import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';

export default class GithubUserModel extends Model {
  static table = 'github_users';

  @text('login') login!: string;
  @text('url') url!: string;
  @text('avatar_url') avatarUrl!: string;
}